const withNoop = Page => {
  const noop = props => {
    return <Page {...props} />;
  };
	
  if(Page.getInitialProps) {
    noop.getInitialProps = Page.getInitialProps
  }
  return noop;
};