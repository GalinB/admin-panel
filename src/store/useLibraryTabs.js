import { create } from 'zustand'
import tabsData from './tabs.json'

const useLibraryTabs = create((set) => ({
  tabs: tabsData.tabs,
  toggleTab: (tabId) =>
    set((prevState) => ({
      ...prevState,
      tabs: prevState.tabs.map((tab) =>
        tab.tabId === tabId ? { ...tab, isActive: !tab.isActive } : tab
      ),
    })),
  setTabOrder: (tabId, newOrder) =>
    set((prev) => {
      const tab = prev.tabs.find((t) => t.tabId === tabId)
      const swapWith = prev.tabs[newOrder]

      if (!tab) {
        console.warn('tabId is invalid')
        return prev
      } else if (!swapWith) {
        console.warn('newOrder is not valid tab')
        return prev
      }

      const currIdx = prev.tabs.indexOf(tab)
      const orderedTabs = [...prev.tabs]

      orderedTabs[currIdx] = swapWith
      orderedTabs[newOrder] = tab

      return {
        ...prev,
        tabs: orderedTabs,
      }
    }),
}))

export default useLibraryTabs
