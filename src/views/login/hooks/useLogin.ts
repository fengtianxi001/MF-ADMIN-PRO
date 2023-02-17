import { ref, watchEffect } from "vue";
import { useCaptcha, useLoading } from "@/hooks";
import { useUserStore } from "@/stores/modules/user";

function useLogin() {
  const { caprchaSrc, captchaText, captchaRefresh, captchaValidate } =
    useCaptcha([72 * 2, 32 * 2]);
  const { loading, openLoading, closeLoading } = useLoading();
  const account = ref("");
  const password = ref("");
  const captcha = ref(captchaText.value);
  const userStore = useUserStore();
  const onLogin = async () => {
    openLoading();
    await userStore.userLogin({
      account: account.value,
      password: password.value,
    });
    closeLoading();
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
