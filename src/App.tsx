import * as React from "react";
import { hot } from "react-hot-loader";
import "./assets/scss/App.scss";
import { Provider } from "react-redux";
import { appStore } from "./redux/store/store";
import Index from "./components";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <Provider store={appStore}>
        <div className="page-wrapper">
          <Index />
        </div>
      </Provider>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
