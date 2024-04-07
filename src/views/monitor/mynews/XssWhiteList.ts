//xss攻击白名单列表
export const options = {
  whiteList: {
    h1: ['style'],
    h2: ['style'],
    h3: ['style'],
    h4: ['style'],
    h5: ['style'],
    h6: ['style'],
    hr: ['style'],
    span: ['style'],
    strong: ['style'],
    b: ['style'],
    i: ['style'],
    br: [],
    p: ['style'],
    pre: ['style'],
    code: ['style'],
    a: ['style', 'target', 'href', 'title', 'rel'],
    img: ['style', 'src', 'title','width','height'],
    div: ['style'],
    table: ['style', 'width', 'border', 'height'],
    tr: ['style'],
    td: ['style', 'width', 'colspan'],
    th: ['style', 'width', 'colspan'],
    tbody: ['style'],
    ul: ['style'],
    li: ['style'],
    ol: ['style'],
    dl: ['style'],
    dt: ['style'],
    em: ['style'],
    cite: ['style'],
    section: ['style'],
    header: ['style'],
    footer: ['style'],
    blockquote: ['style'],
    audio: ['autoplay', 'controls', 'loop', 'preload', 'src'],
    video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width'],
  },
};
