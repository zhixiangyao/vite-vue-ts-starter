declare global {
  interface Window {
    L2Dwidget: {
      init: any
    }
  }

  function $(selector: string): any
  function $(domReadyCallback: () => any): any

  const graphql: (query: TemplateStringsArray) => void
}

export {}
