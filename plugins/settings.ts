export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', async () => {
    console.log('app:created');
    let appConfig: any = useAppConfig();
  });
});
