import { storiesOf } from '@storybook/angular';

import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {StreamComponent} from './../app/components/stream/stream.component';
import {MarbleComponent} from './../app/components/marble/marble.component';
import { SlidableDirective } from '../app/directives/slidable.directive';

storiesOf('Stream', module)
  .add(
    'with marble',
     withNotes({text: '1行分のデータ'})(() => ({
      component: StreamComponent,
      props: {
        marbles: [1,2,3]
      },
      moduleMetadata: {
        imports: [],
        providers: [],
        declarations: [MarbleComponent, SlidableDirective],
        schemas: [],
        entryComponents: [MarbleComponent]
      }
     }))
  );

