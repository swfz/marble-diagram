import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {MarbleComponent} from './../app/components/marble/marble.component';


storiesOf('Marble', module)
  .add(
    'Number Value',
     withNotes({text: '1行分のデータ'})(() => ({
      component: MarbleComponent,
      props: {
        value: 1
      },
     }))
  )
  .add(
    'Multiline Value',
     withNotes({text: '複数行のデータ'})(() => ({
     component: MarbleComponent,
     props: {
       value: "[\nhoge: fuga,\n foo: bar\n]"
      }
     })
    )
  );
