import { ref, watchEffect } from "vue";
import { useCaptcha, useLoading } from "@/hooks";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { login } from "@/apis/user";
import { setToken } from "@/utils/auth";

function useLogin() {
  const { caprchaSrc, captchaText, captchaRefresh, captchaValidate } =
    useCaptcha([72 * 2, 32 * 2]);
  const { loading, openLoading, closeLoading } = useLoading();
  const router = useRouter();
  const account = ref("");
  const password = ref("");
  const captcha = ref(captchaText.value);

  const onLogin = async () => {
    openLoading();
    const { tokenValue } = await login({
      account: account.value,
      password: password.value,
    });
    closeLoading();
    if (!tokenValue) return void 0;
    setToken(tokenValue);
    Message.success("登录成功");
    router.push("/");
  };

  if (import.meta.env.DEV) {
    account.value = "admin";
    password.value = "admin";
    watchEffect(() => {
      captcha.value = captchaText.value;
    });
  }
  return {
    loading,
    account,
    password,
    captcha,
    caprchaSrc,
    onLogin,
    captchaRefresh,
    captchaValidate,
  };
}

export default useLogin;
