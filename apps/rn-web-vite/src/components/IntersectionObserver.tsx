import {Observer, View} from "align-ui";
import {useEffect, useState} from "react";

const IntersectionObserver = () => {
    const {IOList, InView} = Observer
    const [dataSource, setDataSource] = useState<string[]>([])
    const [itemsVisible, setItemsVisible]= useState<boolean[]>([])

    useEffect(() => {
        const data = (new Array(100)).fill(0).map((_, index) => {
            return `item-${index + 1}`
        })
        setDataSource(data)
    }, []);

    return(
        <IOList
            dataSource={dataSource}
            renderItem={({item, index}) => {
                return (
                    <InView
                        moduleName={index}
                        onChange={(inView, options) => {
                            itemsVisible[options?.moduleName as number] = inView
                            setItemsVisible([...itemsVisible])
                        }}
                    >
                        <View containerClass={`h-22,item-center,flex-row`}>
                            {item} -- visible:{itemsVisible[index] ? 'visible': 'invisible'}
                        </View>
                    </InView>
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

export default IntersectionObserver;
