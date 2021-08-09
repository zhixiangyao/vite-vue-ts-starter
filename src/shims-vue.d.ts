declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>

  global {
    const graphql: (query: TemplateStringsArray) => void
    namespace TestNamespace {
      interface ComponentProps {
        children: {}
        data: {}
      }
    }
  }

  export default component
}

declare interface Window {
  L2Dwidget: {
    init: any
  }
}
