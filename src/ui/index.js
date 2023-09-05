import components from '@/components/index.js'
import "@/assets/css/reset.css";
import 'vant/es/toast/style';
import 'vant/es/image-preview/style';

export default (app) => {
  app.use(components);
}
