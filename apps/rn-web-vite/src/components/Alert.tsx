import { Alert, View } from 'align-ui';

function Demo() {
  return (
    <>
      <View containerClass="flex-col">
        <Alert type="info" message="这是一条提示信息" />
      </View>
      <View containerClass="mt-10,flex-col">
        <Alert type="success" message="这条消息提示成功信息" />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert type="warning" message="这是一条警告信息" />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert type="error" message="这是一条错误信息" />
      </View>
      <View containerClass="mt-10,flex-col">
        <Alert showIcon showCloseIcon={true} type="info" message="这是一条提示信息" />
      </View>
      <View containerClass="mt-10,flex-col">
        <Alert showIcon showCloseIcon={true} type="success" message="这条消息提示成功信息" />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert
          showIcon
          showCloseIcon={true}
          type="warning"
          message="这是一条警告信息"
          description="这是一条描述信息"
        />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert
          showIcon
          showCloseIcon={true}
          type="error"
          message="这是一条错误信息"
          description="这是一条描述信息"
        />
      </View>
    </>
  );
}
export default Demo;
