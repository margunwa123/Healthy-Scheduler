import React, { createContext, FC, useContext, useReducer } from 'react';

interface ActivityActionType extends DispatchActionType {
  type:
    | 'add_activity_group'
    | 'add_activity'
    | 'delete_activity'
    | 'delete_activity_group'
    | 'edit_activity'
    | 'edit_activity_group';
  payload?: ActivityGroup | Activity | ActivityPayload;
}

interface ActivitiesState {
  activityGroups: ActivityGroup[];
}

export const StateActivitiesContext = createContext<ActivitiesState>({
  activityGroups: [],
});
export const DispatchActivitiesContext = createContext<
  ReducerDispatchAction<ActivityActionType>
>(() => {});

/**
 *
 * @param state - the user current state
 * @param action - user action
 */
const reducer = (
  state: ActivitiesState,
  action: ActivityActionType
): ActivitiesState => {
  switch (action.type) {
    case 'add_activity_group': {
      if (!(action.payload as ActivityGroup).activities) {
        return state;
      }
      return {
        activityGroups: [
          ...state.activityGroups,
          action.payload as ActivityGroup,
        ],
      };
    }
    case 'delete_activity_group': {
      if (!(action.payload as ActivityGroup).activities) {
        return state;
      }
      return {
        activityGroups: state.activityGroups.filter(
          (actGroup) =>
            actGroup.title === (action.payload as ActivityGroup).title
        ),
      };
    }

    case 'edit_activity_group': {
      const payload = action.payload as ActivityGroup;
      if (!payload.activities) {
        return state;
      }
      return {
        activityGroups: state.activityGroups.map((actGroup) => {
          if (actGroup.title === payload.title) {
            return payload;
          }
          return actGroup;
        }),
      };
    }
    case 'add_activity': {
      return {
        activityGroups: state.activityGroups.map((actGroup) => {
          const payload = action.payload as ActivityPayload;
          if (payload.activityGroupTitle === actGroup.title) {
            return {
              ...actGroup,
              activities: [...actGroup.activities, payload.activity],
            };
          }
          return actGroup;
        }),
      };
    }
    case 'delete_activity': {
      return {
        activityGroups: state.activityGroups.map((actGroup) => {
          const payload = action.payload as ActivityPayload;
          if (payload.activityGroupTitle === actGroup.title) {
            return {
              ...actGroup,
              activities: actGroup.activities.filter(
                (activity) => activity.title !== payload.activity.title
              ),
            };
          }
          return actGroup;
        }),
      };
    }
    case 'edit_activity': {
      return {
        activityGroups: state.activityGroups.map((actGroup) => {
          const payload = action.payload as ActivityPayload;
          if (payload.activityGroupTitle === actGroup.title) {
            return {
              ...actGroup,
              activities: actGroup.activities.map((activity) => {
                if (activity.title === payload.activity.title) {
                  return payload.activity;
                }
                return activity;
              }),
            };
          }
          return actGroup;
        }),
      };
    }
    default:
      throw new Error('No action type was given');
  }
};

/**
 * User provider used in _app
 */
export const ActivitiesProvider: FC<ActivitiesState> = ({
  children,
  activityGroups,
}) => {
  const [state, dispatch] = useReducer(reducer, { activityGroups });

  return (
    <StateActivitiesContext.Provider value={state}>
      <DispatchActivitiesContext.Provider value={dispatch}>
        {children}
      </DispatchActivitiesContext.Provider>
    </StateActivitiesContext.Provider>
  );
};

export const useActivities = () => useContext(StateActivitiesContext);
export const useDispatchActivities = () =>
  useContext(DispatchActivitiesContext);
