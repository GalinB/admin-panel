import { useState } from 'react'

export const useLibraryTabs = () => {
  const [tabs, setTab] = useState([
      {
        tabId: '001',
        tabName: 'Access to exclusive content',
        isActive: true,
        src1: '',
        src2: '/close.svg',
      },
      {
        tabId: '002',
        tabName: 'Chat with the creator via Properchat',
        isActive: true,
        src1: '',
        src2: '/close.svg',
      },
      {
        tabId: '003',
        tabName: 'Support the creator',
        isActive: true,
        src1: '',
        src2: '',
      },
      {
        tabId: '004',
        tabName: 'Access to Fanswall',
        isActive: true,
        src1: '',
        src2: '',
      },
      {
        tabId: '005',
        tabName: 'Early access to YouTube videos',
        isActive: false,
        src1: '',
        src2: '',
      },
      {
        tabId: '006',
        tabName: 'Hire Galin Bozhkov 🚀',
        isActive: false,
        src1: '',
        src2: '',
      },
      {
        tabId: '007',
        tabName: "Become a member of the creator's Properchat group",
        isActive: false,
        src1: '',
        src2: '',
      },
      {
        tabId: '008',
        tabName: "Receive the creator's merch",
        isActive: false,
        src1: '',
        src2: '',
      },
    ]),
    toggleTab = (tabId) =>
      setTab((prev) =>
        prev.map((tab) => (tab.tabId === tabId ? { ...tab, isActive: !tab.isActive } : tab))
      )
  return { tabs, toggleTab }
}
