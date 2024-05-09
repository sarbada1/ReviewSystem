import React from 'react'
import { Input,Space } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

export const SearchComponent = () => {
  return (
<>
<Search placeholder="input search text" onSearch={onSearch} enterButton style={{ width: 800,marginLeft:'10%' }} />



</>  
)
}
