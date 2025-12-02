declare module 'uikit' {
  const UIkit: {
    use: (plugin: unknown) => void;
    [key: string]: unknown;
  };
  export default UIkit;
}

declare module 'uikit/dist/js/uikit-icons' {
  const Icons: unknown;
  export default Icons;
}
