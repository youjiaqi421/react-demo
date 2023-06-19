import * as React from "react";
import { HeadRouterList } from "src/Map/RouterMap";
// import StyleSheet from "src/View/Layout/Layout.less
function Head() {
  return (
    <div>
      {HeadRouterList.map((item, index) => {
        return (
          <div key={item.title + `${index}`}>
            <span>{item.title} </span>
          </div>
        );
      })}
    </div>
  );
}

export default Head;
