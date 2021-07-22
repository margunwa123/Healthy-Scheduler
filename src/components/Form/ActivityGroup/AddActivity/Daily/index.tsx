import Button from '@/components/Button';
import FormInput from '@/components/Form/FormInput';
import { ONE_HOUR } from '@/helpers/time';
import { useDispatchActivities } from '@/reducers/ActivityReducer';
import React, { FC, useState } from 'react';
import Form, { FormProps } from '../../..';

const DailyActivityGroupForm: FC<FormProps> = ({ onSubmit, ...props }) => {
  const dispatchActivity = useDispatchActivities();
  const [actGroup, setActGroup] = useState<DailyActivityGroup>({
    title: '',
    daysActive: 'everyday',
    time: ONE_HOUR * 15,
    activities: [],
    type: 'daily',
  });

  const createDailyActivityGroup: (item: any) => void = (item) => {
    console.log(item);
  };

  return (
    <Form onSubmitCallback={createDailyActivityGroup} {...props}>
      <FormInput
        name="title"
        label="Title"
        onChange={(e) =>
          setActGroup({
            ...actGroup,
            title: e.currentTarget.value,
          })
        }
      />
      <input type="checkbox" id="html" name="fav_language" value="HTML" />
      <label htmlFor="html">HTML</label>
      <input type="checkbox" id="css" name="fav_language" value="CSS" />
      <label htmlFor="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label htmlFor="javascript">JavaScript</label>
      <Button>Create</Button>
    </Form>
  );
};

export default DailyActivityGroupForm;
