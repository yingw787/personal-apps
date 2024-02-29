import { A as a } from "@libs/mdx-components/components/a";
import { P as p } from "@libs/mdx-components/components/p";
import { H1 as h1 } from "@libs/mdx-components/components/h1";
import { H2 as h2 } from "@libs/mdx-components/components/h2";
import { H3 as h3 } from "@libs/mdx-components/components/h3";
import { OL as ol } from "@libs/mdx-components/components/ol";
import { UL as ul } from "@libs/mdx-components/components/ul";
import { LI as li } from "@libs/mdx-components/components/li";
import { HR as hr } from "@libs/mdx-components/components/hr";
import { Code as code } from "@libs/mdx-components/components/code";
import { Image } from "@libs/mdx-components/components/image";
import { Figure } from "@libs/mdx-components/components/figure";
import { Snippet } from "@libs/mdx-components/components/snippet";
import { Caption } from "@libs/mdx-components/components/caption";
import { Blockquote as blockquote } from "@libs/mdx-components/components/blockquote";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Image,
    blockquote,
    Image,
    Figure,
    Snippet,
    Caption,
  };
}
