interface Window {
  L2Dwidget: {
    init: any
  }
}

declare function $(selector: string): any
declare function $(domReadyCallback: () => any): any

declare const graphql: (query: TemplateStringsArray) => void
