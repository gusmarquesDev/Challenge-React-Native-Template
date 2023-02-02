import React from 'react'
import { Image,View} from 'react-native'
import { TabsActive,TabsText, TabsView} from './Tabs.styles'

export interface PropsTabs{
label:string,
bg:boolean
}


const Tabs: React.FC<PropsTabs> = ({
 label,
 bg
 }) => {      
   return (
      <>
      <TabsView>
        <TabsText bg={bg}>{label}</TabsText>
        <TabsActive bg={bg}/>
      </TabsView>
      
      </>
   )
}

export default Tabs;