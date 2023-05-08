import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import '../Popover/styles.scss';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {FaChevronCircleRight} from 'react-icons/fa';


const PopoverDemo = () => (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger"><span className='question-mark'><AiOutlineQuestionCircle/></span>  </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          Os produtos estão classificados de acordo com o número de vendas.
          Aqui você pode visualizar os 5 produtos mais vendidos em suas lojas
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
  
  export default PopoverDemo;