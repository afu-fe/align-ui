import {List as FlatList, View} from "align-ui";
import {useEffect, useState} from "react";
const List = () => {
    const [dataSource, setDataSource] = useState<string[]>([])

    useEffect(() => {
        const data = (new Array(100)).fill(0).map((_, index) => {
            return `item-${index + 1}`
        })
        setDataSource(data)
    }, []);

    return(
        <FlatList
            dataSource={dataSource}
            renderItem={({item}) => {
                return (
                    <View containerClass={`h-22,item-center,flex-row`}>
                        {item}
                    </View>
                )
            }}
            ItemSeparatorComponent={() => {
                return(
                    <View containerClass={`h-0.5,bg-grey-30`}/>
                )
            }}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default List;
