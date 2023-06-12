import { create } from 'zustand'
import { tabs as initialTabs } from './tabs.json'

const useLibraryTabs = create((set) => ({
  tabs: initialTabs,
  toggleTab: (tabId) =>
    set((prevState) => ({
      ...prevState,
      tabs: prevState.tabs.map((tab) =>
        tab.tabId === tabId ? { ...tab, isActive: !tab.isActive } : tab
      ),
    })),
  //function setTabOrder(currentTab, NewOrder){
  //   1.map tabs
  //   optional - if currentTab === tabId, then tabs.find(match tabId with currentTab)
  //   2.if tab.order === neworder, then settaborder to current tab.order(tldr swap the order property of the 2 elements in the array)
  //   3. sort tabs by order property
  //   4. set state properly after calculating the new tabs array
  // }
}))

export default useLibraryTabs
