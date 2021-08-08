import React, { createContext, FC, useContext, useReducer } from 'react';

interface ActivityActionType extends DispatchActionType {
  type:
    | 'add_activity_group'
    | 'add_activity'
    | 'delete_activity'
    | 'delete_activity_group'
    | 'edit_activity'
    | 'edit_activity_group'
    | 'initiate';
  payload?: any;
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
      return {
        activityGroups: [
          ...state.activityGroups,
          action.payload as ActivityGroup,
        ],
      };
    }
    case 'initiate': {
      if ((action.payload as ActivityGroup[]).length === 0) {
        return state;
      }
      return {
        activityGroups: action.payload as ActivityGroup[],
      };
    }
    case 'delete_activity_group': {
      // payload is string
      return {
        activityGroups: state.activityGroups.filter(
          (actGroup) => actGroup.id !== (action.payload as string)
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
          if (actGroup.id === payload.id) {
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
          if (payload.groupId === actGroup.id) {
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
          const payload = action.payload as DeleteActivityPayload;
          if (payload.groupId === actGroup.id) {
            return {
              ...actGroup,
              activities: actGroup.activities.filter(
                (activity) => activity.id !== payload.activityId
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
          if (payload.groupId === actGroup.id) {
            return {
              ...actGroup,
              activities: actGroup.activities.map((activity) => {
                if (activity.id === payload.activity.id) {
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
