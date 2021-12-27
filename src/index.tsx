import { ActionPanel, Form, List, PushAction, showToast, SubmitFormAction, ToastStyle, useNavigation } from "@raycast/api";


function DataForm(): JSX.Element {
  const { pop: popNavigation } = useNavigation();
  return (<Form actions={
    <ActionPanel>
      <SubmitFormAction
        title="Submit"
        onSubmit={async () => {
          popNavigation();
        }}
      />
    </ActionPanel>
  }>
    <Form.TextField id="key" title="key" defaultValue="value" />
  </Form>)
}

function SecondMenu(): JSX.Element {
  return (
    <List>
      <List.Item
        key="1"
        title="Second Menu"
        actions={
          <ActionPanel>
            <PushAction
              title="Data Form"
              onPush={() => showToast(ToastStyle.Success, "goto the data form")}
              target={<DataForm />} />
          </ActionPanel>
        }
      />
    </List>
  );
}

export default function Command() {
  return (
    <List>
      <List.Item
        key="1"
        title="First Menu"
        actions={
          <ActionPanel>
            <PushAction
              title="Second Menu"
              onPush={() => showToast(ToastStyle.Success, "goto the second menu")}
              target={<SecondMenu />} />
          </ActionPanel>
        }
      />
    </List>
  );
}
