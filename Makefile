#!/usr/bin/env make

# Export the development environment variables stored in
# `${GIT_REPO_ROOT}/.env.local` into the `make` context. Important for
# configuring environment variables in supabase/config.toml.
#
# Change this to `.env.production` or another env file if necessary to use
# another environment context.
ifneq (,$(wildcard $(GIT_REPO_ROOT)/.env.local))
    include $(GIT_REPO_ROOT)/.env.local
    export
endif

check:
	@echo "Checking system dependencies..."
	# GNU Make 4.2.1 Built for x86_64-pc-linux-gnu Copyright (C) 1988-2016 Free
	# Software Foundation, Inc. License GPLv3+: GNU GPL version 3 or later
	# <http://gnu.org/licenses/gpl.html> This is free software: you are free to
	# change and redistribute it. There is NO WARRANTY, to the extent permitted by
	# law.
	echo $$(make --version)
	# git version 2.25.1
	echo $$(git --version)
	# 8.19.4
	echo $$(npx --version)
	# 8.19.4
	echo $$(npm --version)
	# Docker version 25.0.3, build 4debf41
	echo $$(docker --version)
	# docker-compose version 1.29.2, build unknown
	echo $$(docker-compose --version)

# Instead of typecheck, use build instead, since it typechecks more reliably
# than tsc. This is also necessary for deploying to Vercel.
build:
	npx nx run-many -t build --parallel=12

# Autoformats code in repositories.
autoformat:
	npx nx run-many -t autoformat --parallel=12

fmt:
	npx nx run-many -t fmt --parallel=12

# Build production as containers, then serve locally.
container:
	npx nx run-many -t container --parallel=12
	docker-compose up

# Deploy Terraform-configured applications.
#
# TODO: Change to run-many plan and run-many apply later on.
tf-deploy: build
	npx nx run pkg-src-infra-com-yingw787-dotfiles:plan
	npx nx run pkg-src-infra-com-yingw787-dotfiles:apply
