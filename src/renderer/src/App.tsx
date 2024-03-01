import { ActionButtonRow, Content, DraggableTopBar, MarkDownEditor, NotePreviewList, RootLayout, Sidebar } from "./components"

function App(): JSX.Element {
    return (
      <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 border-4 bg-zinc-800">
          <ActionButtonRow className="flex justify-between"/>
          <NotePreviewList className="pt-4 space-y-2" />
        </Sidebar>
        <Content className="bg-zinc-900/50 border-l  border-l-white/20">
          <MarkDownEditor />
        </Content>
      </RootLayout>
      </>
  )
}

export default App
