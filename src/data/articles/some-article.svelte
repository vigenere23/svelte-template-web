<div>
  <GioTitle noMargin fontSize="3rem">Markdown: Syntax</GioTitle>
  <GioCaption>
    <GioBodyText>
      <strong>Note:</strong>
      This is a markdown test taken from
      <GioSmartLink
        accent
        href="https://daringfireball.net/projects/markdown/syntax">
        this blog
      </GioSmartLink>
    </GioBodyText>
  </GioCaption>
  <GioHeading level={1} id="overview">Overview</GioHeading>
  <GioHeading level={2} id="philosophy">Philosophy</GioHeading>
  <GioBodyText>
    Markdown is intended to be as easy-to-read and easy-to-write as is feasible.
  </GioBodyText>
  <GioBodyText>
    Readability, however, is emphasized above all else. A Markdown-formatted
    document should be publishable as-is, as plain text, without looking like
    it&#39;s been marked up with tags or formatting instructions. While
    Markdown&#39;s syntax has been influenced by several existing text-to-HTML
    filters -- including
    <GioSmartLink
      accent
      href="http://docutils.sourceforge.net/mirror/setext.html">
      Setext
    </GioSmartLink>,
    <GioSmartLink accent href="http://www.aaronsw.com/2002/atx/">
      atx
    </GioSmartLink>,
    <GioSmartLink accent href="http://textism.com/tools/textile/">
      Textile
    </GioSmartLink>,
    <GioSmartLink accent href="http://docutils.sourceforge.net/rst.html">
      reStructuredText
    </GioSmartLink>,
    <GioSmartLink accent href="http://www.triptico.com/software/grutatxt.html">
      Grutatext
    </GioSmartLink>, and
    <GioSmartLink accent href="http://ettext.taint.org/doc/">
      EtText
    </GioSmartLink>
    -- the single biggest source of inspiration for Markdown&#39;s syntax is the
    format of plain text email.
  </GioBodyText>
  <GioHeading level={1} id="block-elements">Block Elements</GioHeading>
  <GioHeading level={2} id="paragraphs-and-line-breaks">
    Paragraphs and Line Breaks
  </GioHeading>
  <GioBodyText>
    A paragraph is simply one or more consecutive lines of text, separated by
    one or more blank lines. (A blank line is any line that looks like a blank
    line -- a line containing nothing but spaces or tabs is considered blank.)
    Normal paragraphs should not be indented with spaces or tabs.
  </GioBodyText>
  <GioBodyText>
    The implication of the &quot;one or more consecutive lines of text&quot;
    rule is that Markdown supports &quot;hard-wrapped&quot; text paragraphs.
    This differs significantly from most other text-to-HTML formatters
    (including Movable Type&#39;s &quot;Convert Line Breaks&quot; option) which
    translate every line break character in a paragraph into a
    <GioInlineCode>&lt;br /&gt;</GioInlineCode>
    tag.
  </GioBodyText>
  <GioBodyText>
    When you
    <em>do</em>
    want to insert a
    <GioInlineCode>&lt;br /&gt;</GioInlineCode>
    break tag using Markdown, you end a line with two or more spaces, then type
    return.
  </GioBodyText>
  <GioHeading level={2} id="headers">Headers</GioHeading>
  <GioBodyText>
    Markdown supports two styles of headers, [Setext] [1] and [atx] [2].
  </GioBodyText>
  <GioBodyText>
    Optionally, you may &quot;close&quot; atx-style headers. This is purely
    cosmetic -- you can use this if you think it looks better. The closing
    hashes don&#39;t even need to match the number of hashes used to open the
    header. (The number of opening hashes determines the header level.)
  </GioBodyText>
  <GioHeading level={2} id="blockquotes">Blockquotes</GioHeading>
  <GioBodyText>
    Markdown uses email-style
    <GioInlineCode>&gt;</GioInlineCode>
    characters for blockquoting. If you&#39;re familiar with quoting passages of
    text in an email message, then you know how to create a blockquote in
    Markdown. It looks best if you hard wrap the text and put a
    <GioInlineCode>&gt;</GioInlineCode>
    before every line:
  </GioBodyText>
  <GioCaption>
    <GioBodyText>
      This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
      Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    </GioBodyText>
    <GioBodyText>
      Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
      sem consectetuer libero luctus adipiscing.
    </GioBodyText>
  </GioCaption>
  <GioBodyText>
    Markdown allows you to be lazy and only put the
    <GioInlineCode>&gt;</GioInlineCode>
    before the first line of a hard-wrapped paragraph:
  </GioBodyText>
  <GioCaption>
    <GioBodyText>
      This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
      Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    </GioBodyText>
  </GioCaption>
  <GioCaption>
    <GioBodyText>
      Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
      sem consectetuer libero luctus adipiscing.
    </GioBodyText>
  </GioCaption>
  <GioBodyText>
    Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by adding
    additional levels of
    <GioInlineCode>&gt;</GioInlineCode>:
  </GioBodyText>
  <GioCaption>
    <GioBodyText>This is the first level of quoting.</GioBodyText>
    <GioCaption>
      <GioBodyText>This is nested blockquote.</GioBodyText>
    </GioCaption>
    <GioBodyText>Back to the first level.</GioBodyText>
  </GioCaption>
  <GioBodyText>
    Blockquotes can contain other Markdown elements, including headers, lists,
    and code blocks:
  </GioBodyText>
  <GioCaption>
    <GioHeading level={1} id="this-is-a-header-">This is a header.</GioHeading>
    <GioBodyText noMargin>
      <GioList indent>
        <GioListItem>This is the first list item.</GioListItem>
        <GioListItem>This is the second list item.</GioListItem>
      </GioList>
    </GioBodyText>
    <GioBodyText>Here&#39;s some example code:</GioBodyText>
    <GioCodeBlock
      language=""
      code="return%20shell_exec(%22echo%20$input%20%7C%20$markdown_script%22);" />
  </GioCaption>
  <GioBodyText>
    Any decent text editor should make email-style quoting easy. For example,
    with BBEdit, you can make a selection and choose Increase Quote Level from
    the Text menu.
  </GioBodyText>
  <GioHeading level={2} id="lists">Lists</GioHeading>
  <GioBodyText>
    Markdown supports ordered (numbered) and unordered (bulleted) lists.
  </GioBodyText>
  <GioBodyText>
    Unordered lists use asterisks, pluses, and hyphens -- interchangably -- as
    list markers:
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>Red</GioListItem>
      <GioListItem>Green</GioListItem>
      <GioListItem>Blue</GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>is equivalent to:</GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>Red</GioListItem>
      <GioListItem>Green</GioListItem>
      <GioListItem>Blue</GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>and:</GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>Red</GioListItem>
      <GioListItem>Green</GioListItem>
      <GioListItem>Blue</GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>Ordered lists use numbers followed by periods:</GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>Bird</GioListItem>
      <GioListItem>McHale</GioListItem>
      <GioListItem>Parish</GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    It&#39;s important to note that the actual numbers you use to mark the list
    have no effect on the HTML output Markdown produces. The HTML Markdown
    produces from the above list is:
  </GioBodyText>
  <GioBodyText>
    If you instead wrote the list in Markdown like this:
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>Bird</GioListItem>
      <GioListItem>McHale</GioListItem>
      <GioListItem>Parish</GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>or even:</GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>Bird</GioListItem>
      <GioListItem>McHale</GioListItem>
      <GioListItem>Parish</GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    you&#39;d get the exact same HTML output. The point is, if you want to, you
    can use ordinal numbers in your ordered Markdown lists, so that the numbers
    in your source match the numbers in your published HTML. But if you want to
    be lazy, you don&#39;t have to.
  </GioBodyText>
  <GioBodyText>
    To make lists look nice, you can wrap items with hanging indents:
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
        hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec,
        fringilla in, laoreet vitae, risus.
      </GioListItem>
      <GioListItem>
        Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
        sem consectetuer libero luctus adipiscing.
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>But if you want to be lazy, you don&#39;t have to:</GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
        hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec,
        fringilla in, laoreet vitae, risus.
      </GioListItem>
      <GioListItem>
        Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
        sem consectetuer libero luctus adipiscing.
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    List items may consist of multiple paragraphs. Each subsequent paragraph in
    a list item must be indented by either 4 spaces or one tab:
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        <GioBodyText>
          This is a list item with two paragraphs. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
        </GioBodyText>
        <GioBodyText>
          Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
          Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
        </GioBodyText>
      </GioListItem>
      <GioListItem>
        <GioBodyText>
          Suspendisse id sem consectetuer libero luctus adipiscing.
        </GioBodyText>
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    It looks nice if you indent every line of the subsequent paragraphs, but
    here again, Markdown will allow you to be lazy:
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        <GioBodyText>This is a list item with two paragraphs.</GioBodyText>
        <GioCodeBlock
          language=""
          code="This%20is%20the%20second%20paragraph%20in%20the%20list%20item.%20You're" />
        <GioBodyText>
          only required to indent the first line. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
        </GioBodyText>
      </GioListItem>
      <GioListItem>
        <GioBodyText>Another item in the same list.</GioBodyText>
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    To put a blockquote within a list item, the blockquote&#39;s
    <GioInlineCode>&gt;</GioInlineCode>
    delimiters need to be indented:
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        <GioBodyText>A list item with a blockquote:</GioBodyText>
        <GioCaption>
          <GioBodyText>This is a blockquote inside a list item.</GioBodyText>
        </GioCaption>
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioBodyText>
    To put a code block within a list item, the code block needs to be indented
    <em>twice</em>
    -- 8 spaces or two tabs:
  </GioBodyText>
  <GioBodyText noMargin>
    <GioList indent>
      <GioListItem>
        <GioBodyText>A list item with a code block:</GioBodyText>
        <GioCodeBlock language="" code="%3Ccode%20goes%20here%3E" />
      </GioListItem>
    </GioList>
  </GioBodyText>
  <GioHeading level={2} id="code-blocks">Code Blocks</GioHeading>
  <GioBodyText>
    Pre-formatted code blocks are used for writing about programming or markup
    source code. Rather than forming normal paragraphs, the lines of a code
    block are interpreted literally. Markdown wraps a code block in both
    <GioInlineCode>&lt;pre&gt;</GioInlineCode>
    and
    <GioInlineCode>&lt;code&gt;</GioInlineCode>
    tags.
  </GioBodyText>
  <GioBodyText>
    To produce a code block in Markdown, simply indent every line of the block
    by at least 4 spaces or 1 tab.
  </GioBodyText>
  <GioBodyText>This is a normal paragraph:</GioBodyText>
  <GioCodeBlock language="" code="This%20is%20a%20code%20block." />
  <GioBodyText>Here is an example of AppleScript:</GioBodyText>
  <GioCodeBlock
    language=""
    code="tell%20application%20%22Foo%22%0A%20%20%20%20beep%0Aend%20tell" />
  <GioBodyText>
    A code block continues until it reaches a line that is not indented (or the
    end of the article).
  </GioBodyText>
  <GioBodyText>
    Within a code block, ampersands (
    <GioInlineCode>&amp;</GioInlineCode>) and angle brackets (
    <GioInlineCode>&lt;</GioInlineCode>
    and
    <GioInlineCode>&gt;</GioInlineCode>) are automatically converted into HTML
    entities. This makes it very easy to include example HTML source code using
    Markdown -- just paste it and indent it, and Markdown will handle the hassle
    of encoding the ampersands and angle brackets. For example, this:
  </GioBodyText>
  <GioCodeBlock
    language=""
    code="%3Cdiv%20class=%22footer%22%3E%0A%20%20%20%20&copy;%202004%20Foo%20Corporation%0A%3C/div%3E" />
  <GioBodyText>
    Regular Markdown syntax is not processed within code blocks. E.g., asterisks
    are just literal asterisks within a code block. This means it&#39;s also
    easy to use Markdown to write about Markdown&#39;s own syntax.
  </GioBodyText>
  <GioCodeBlock
    language=""
    code="tell%20application%20%22Foo%22%0A%20%20%20%20beep%0Aend%20tell" />
  <GioHeading level={1} id="span-elements">Span Elements</GioHeading>
  <GioHeading level={2} id="links">Links</GioHeading>
  <GioBodyText>
    Markdown supports two style of links:
    <em>inline</em>
    and
    <em>reference</em>.
  </GioBodyText>
  <GioBodyText>
    In both styles, the link text is delimited by [square brackets].
  </GioBodyText>
  <GioBodyText>
    To create an inline link, use a set of regular parentheses immediately after
    the link text&#39;s closing square bracket. Inside the parentheses, put the
    URL where you want the link to point, along with an
    <em>optional</em>
    title for the link, surrounded in quotes. For example:
  </GioBodyText>
  <GioBodyText>
    This is
    <GioSmartLink accent href="http://example.com/">an example</GioSmartLink>
    inline link.
  </GioBodyText>
  <GioBodyText>
    <GioSmartLink accent href="http://example.net/">This link</GioSmartLink>
    has no title attribute.
  </GioBodyText>
  <GioHeading level={2} id="emphasis">Emphasis</GioHeading>
  <GioBodyText>
    Markdown treats asterisks (
    <GioInlineCode>*</GioInlineCode>) and underscores (
    <GioInlineCode>_</GioInlineCode>) as indicators of emphasis. Text wrapped
    with one
    <GioInlineCode>*</GioInlineCode>
    or
    <GioInlineCode>_</GioInlineCode>
    will be wrapped with an HTML
    <GioInlineCode>&lt;em&gt;</GioInlineCode>
    tag; double
    <GioInlineCode>*</GioInlineCode>&#39;s or
    <GioInlineCode>_</GioInlineCode>&#39;s will be wrapped with an HTML
    <GioInlineCode>&lt;strong&gt;</GioInlineCode>
    tag. E.g., this input:
  </GioBodyText>
  <GioBodyText><em>single asterisks</em></GioBodyText>
  <GioBodyText><em>single underscores</em></GioBodyText>
  <GioBodyText><strong>double asterisks</strong></GioBodyText>
  <GioBodyText><strong>double underscores</strong></GioBodyText>
  <GioHeading level={2} id="code">Code</GioHeading>
  <GioBodyText>
    To indicate a span of code, wrap it with backtick quotes (
    <GioInlineCode>`</GioInlineCode>). Unlike a pre-formatted code block, a code
    span indicates code within a normal paragraph. For example:
  </GioBodyText>
  <GioBodyText>
    Use the
    <GioInlineCode>printf()</GioInlineCode>
    function.
  </GioBodyText>
</div>

<script lang="ts">
  import {
    GioTitle,
    GioSmartLink,
    GioBodyText,
    GioCaption,
    GioHeading,
    GioInlineCode,
    GioListItem,
    GioList,
    GioCodeBlock
  } from '@gabio/design-svelte'
</script>
