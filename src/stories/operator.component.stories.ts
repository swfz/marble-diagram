import { storiesOf } from '@storybook/angular';

import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {OperatorComponent} from './../app/components/operator/operator.component';

storiesOf('Operator', module)
  .add(
    'map',
     withNotes({text: 'オペレータ'})(() => ({
      component: OperatorComponent,
      props: {
        value: 'map(x => x *2)'
      }
     }))
  );

