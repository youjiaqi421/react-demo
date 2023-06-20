import * as React from "react";
import { HeadRouterList } from "src/Map/RouterMap";
import style from "../Layout/layout.less";
function Head() {
  return (
    <div className={style.headerBody}>
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
