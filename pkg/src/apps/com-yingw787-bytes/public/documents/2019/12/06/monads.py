#!/usr/bin/env python3.7
# -*- coding: utf-8 -*-

"""A tutorial on implementing some monads using `python3.7`, encapsulated in
one standalone script.

This focus on monads primarily revolves around error handling, the topic that
drove me to discover monads in the first place.

This `python3.7` script complements the content of blog post
'https://bytes.yingw787.com/posts/2019/11/03/monads'.

This script should work on `python3.7` builds on UNIX-like systems, with a
vanilla configuration (no third-party packages necessary).

Much of this code can be directly attributed to Jason DeLaat's `pymonad`
project, found here: https://bitbucket.org/jason_delaat/pymonad/src/master/
"""

import inspect


class _Maybe(object):
    """An implementation of the 'Maybe' monad.

    This class definition exists to add any monadic attributes or operators.

    Since we're talking about 'Maybe', 'Nothing', and 'Just' only, and since
    'Nothing' and 'Just' inherit from 'Maybe', we'll wrap any basic monadic
    attributes as part of this class definition.
    """
    def __init__(self, data=None):
        """Instantiation stub method.
        """
        # NOTE: Implementation of monadic instantiation should be done
        # in subclasses of `Maybe`.
        self.data = data
        raise NotImplementedError

    def __eq__(self, other):
        """Equality definition, necessary for building assertion suites.
        """
        # NOTE: An equality comparison should not take place between monads of
        # different types, or non-monads.
        #
        # NOTE: This __eq__ method will only work when monad is fully
        # instantiated with hard values. Comparing a monad with only a type
        # definition will always fail, as there is no way to override equality
        # attributes for a functionally generated type.
        #
        # NOTE: The type must be stringified for comparison, as otherwise
        # functionally generated types cannot be directly compared.
        if str(type(self)) != str(type(other)):
            return False

        # Execute equality-by-value comparison.
        return self.data == getattr(other, 'data', None)

    def __ne__(self, other):
        """Not equal definition, necessary for building assertion suites.
        """
        return not self.__eq__(other)

    def bind(self, function):
        """Applies a function argument to the result of a previous monadic
        calculation.
        """
        # Implementation of monadic binding should be done in subclasses of
        # `Maybe`.
        raise NotImplementedError

    def __rshift__(self, function):
        """Operator overloading of bitwise operator `>>` (rightward shift).

        This should help illustrate binding as a set of pipelines, and elide
        callback hell semantics when pipelining.

        This should be safe to overload as bitwise operations on "struct" types
        are not practicable.
        """
        if not isinstance(function, _Maybe):
            error_message = 'Can only pipeline monads.'
            raise TypeError(error_message)

        if not callable(function):
            function = lambda _ : function

        return self.bind(function)


def Maybe(cls):
    """Parametrization of a typedef to include monadic attributes. This method
    enables dynamic classdef generation by inheriting a base class passed in as
    an input argument and overriding class attribute '__bases__'.

    This is a psuedo-definition of generics, which may assist understanding of
    monads between a statically typed language like Haskell and a dynamically
    typed language like Python.

    See the Python documentation for more information on method 'type()' and
    attribute '__bases__':

    https://docs.python.org/3/library/functions.html#type
    https://docs.python.org/3/library/stdtypes.html#class.__bases__
    """
    return type('Maybe(%s)' % cls.__name__, (_Maybe, cls), {})


class _Just(_Maybe):
    """A successful evaluation of a Maybe monad.
    """
    def __init__(self, data=None):
        """Instantiation stub method.
        """
        self.data = data

    def bind(self, function):
        """Applies function to current monad as part of partial application
        binding / sequencing.

        The function should take in a monad of either `Just` or `Nothing`, and
        return either `Just` or `Nothing`.
        """
        return function(self)


def Just(cls):
    """Parametrization of a typedef to include monadic attributes. This method
    enables dynamic classdef generation by inheriting a base class passed in as
    an input argument and overriding class attribute '__bases__'.
    """
    return type('Just(%s)' % cls.__name__, (_Just, cls), {})


class _Nothing(_Maybe):
    """A failed evaluation of a Maybe monad.
    """
    def __init__(self, _=None):
        """Instantiates the Nothing monad.

        NOTE: Need to override the Maybe monad method definition `__init__()`,
        as otherwise Nothing will raise exception `NotImplementedError`.
        """

    def __str__(self):
        """Generate a string representation of the monad.

        Otherwise, singleton `Nothing` will look something like
        `<__main__._Nothing object at $MEMORY_ADDRESS>`.
        """
        return "Nothing"

    def bind(self, _):
        """Applies function to current monad as part of partial application
        binding / sequencing.

        If the Nothing monad is encountered, always return the same class
        instance, as a failure has occurred in the pipeline.
        """
        return self


# Ensure that `Nothing` is unique; uniqueness implies same `id()` result, which
# implies a global object (singleton), much like `None = type(None)()` is a
# singleton.
#
# >>> id(type(None)())
# 4562745448 # Some object ID, this may vary.
# >>> id(None)
# 4562745448 # Same object ID as before.
# >>>
Nothing = _Nothing()


class Reader(_Maybe):
    """Monad to represent partial application of methods given data. This is
    important to uniformly represent monadic types betwen methods and data in a
    pipeline.

    Here, we start to see some of the limitations Python has when stretching
    types. The type `function`, as retrieved from call `type(lambda x : x)`, is
    not directly referenceable from the Python runtime (e.g. typing `int` into
    the Python REPL gives result `<class 'int'>`, whereas typing `function` into
    the same Python REPL raises a `NameError`. If `function` is cast as a
    variable, applying the type as a concrete base type raises a `TypeError`, as
    class `function` does not have flag `Py_TPFLAGS_BASETYPE` set, which to set
    would require a source code change and rebuild:
    https://bytes.com/topic/python/answers/437327-type-slice-not-acceptable-base-type#post1661696)

    As a workaround, create a monadic type to handle currying specifically. This
    class is that monadic definition.

    You could consider this class the functional analogue to the object-oriented
    "Builder" pattern: https://en.wikipedia.org/wiki/Builder_pattern, where
    functional pipelines are created instead of object definitions.
    """
    def __init__(self, function_or_value):
        """Instantiates a pipeline with either a function or a value.
        """
        # If input argument is not callable, then cast as callable with a lambda method.
        function = (
            function_or_value
            if callable(function_or_value)
            else lambda _ : function_or_value
        )
        self.data = function

    def __call__(self, *args):
        """Applies arguments to the curried function.

        Returns the result of the function if all arguments are passed. If fewer
        than the full argument set is passed in, returns a curried function
        which expects the remaining arguments.
        """
        value = self.data

        for a in args:
            value = value(a)

        result = (
            Reader(value)
            if callable(value)
            else value
        )
        return result

    def bind(self, function):
        """Applies the function to the current callable, and regenerates a
        Reader object instance to propagate the pipeline.
        """
        return Reader(
            lambda x: function(self.data(x))(x)
        )


def curry(method):
    """Applies currying to a method with our existing monad definitions.
    """
    num_args = len(inspect.signature(method).parameters)

    def build_reader(argument_values, num_args):
        """Creates the chain of lambda methods to effectively curry a method
        definition, then passes the head to the Reader object instance.
        """
        if num_args == 0:
            return method(*argument_values)
        else:
            return lambda x: build_reader(argument_values + [x], num_args - 1)

    return Reader(build_reader([], num_args))


@curry
def div(denominator : Maybe(int), numerator : Maybe(int)) -> Maybe(float):
    if (
        numerator is Nothing or
        denominator is Nothing or
        denominator.data == 0
    ):
        return Nothing
    return Just(float)(numerator.data / denominator.data)

@curry
def add(a : Maybe(int), b : Maybe(int)) -> Maybe(int):
    if (
        a is Nothing or
        b is Nothing
    ):
        return Nothing
    return Just(int)(a.data + b.data)


if __name__=='__main__':
    # Basic addition.
    pipeline1 = "Just(int)(7) >> add(Just(int)(8))"
    print(f'Executing pipeline "{pipeline1}".')
    result1 = Just(int)(7) >> add(Just(int)(8))
    print(f'Result of pipeline "{pipeline1}" is "{result1}".')
    assert result1 == Just(int)(15)

    # Basic division.
    pipeline2 = "Just(int)(5) >> div(Just(int)(10))"
    print(f'Executing pipeline "{pipeline2}".')
    result2 = Just(int)(5) >> div(Just(int)(10))
    print(f'Result of pipeline "{pipeline2}" is "{result2}".')
    assert result2 == Just(float)(0.5)

    # Division by zero.
    pipeline3 = "Just(int)(7) >> add(Just(int)(8)) >> div(Just(int)(0))"
    print(f'Executing pipeline "{pipeline3}".')
    result3 = Just(int)(7) >> add(Just(int)(8)) >> div(Just(int)(0))
    print(f'Result of pipeline "{pipeline3}" is "{result3}".')
    assert result3 is Nothing

    # Addition after division by zero.
    pipeline4 = "Just(int)(7) >> add(Just(int)(8)) >> div(Just(int)(0)) >> add(Just(int)(15))"
    print(f'Executing pipeline "{pipeline4}".')
    result4 = Just(int)(7) >> add(Just(int)(8)) >> div(Just(int)(0)) >> add(Just(int)(15))
    print(f'Result of pipeline "{pipeline4}" is "{result4}".')
    assert result4 is Nothing
