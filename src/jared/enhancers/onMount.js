import { compose, lifecycle } from "recompose";

export const onMount = func => BaseComponent => {
  const enhance = compose(
    lifecycle({
      componentDidMount() {
        func(this.props);
      }
    })
  );

  return enhance(BaseComponent);
};