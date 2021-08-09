declare global {
  interface Window {
    L2Dwidget: {
      init: any
    }
  }

  let $: (selector: string) => any

  const graphql: (query: TemplateStringsArray) => void

  namespace TestNamespace {
    interface ComponentProps {
      childre?: {}
      data?: {}
    }
  }
}

export {}
