import {Search as CusSearch} from "align-ui";

const Search = () => {
    return (<CusSearch
        autoFocus={true}
        showClearBtn={true}
        defaultValue={'默认值'}
        onSearch={(text) => {
            console.log('onSearch:', text)
        }}
        onChangeText={(text) => {
            console.log('onChangeText:', text)
        }}
    />)
}

export default Search;
