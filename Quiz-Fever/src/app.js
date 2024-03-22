import { page } from './lib/lib.js';
import { addGoTo } from './middlewares/redirectMiddleware.js';
import { addRender } from './middlewares/renderMiddleware.js';

//middlewares
page(addRender);
page(addGoTo);

page.start();