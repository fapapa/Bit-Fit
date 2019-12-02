
import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';


export default function HeartIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M60 20v20H40v20H20v60h20v20h20v20h20v20h20v20h20v20h20v-20h20v-20h20v-20h20v-20h20v-20h20V60h-20V40h-20V20h-60v20h-20V20H60zm20 50v20H60V70h20zm20 20v20H80V90h20z"/>
    </SvgIcon>
  );
}

