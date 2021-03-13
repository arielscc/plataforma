import {
  GET_ALL_COURSES,
  GET_ALL_POSTS,
  GET_ALL_SPECIALITIES,
  GET_COURSE,
  GET_FRAGMENT,
  GET_POST,
  GET_SPECIALITY,
} from './actions';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    case GET_POST:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
};

const especialityReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SPECIALITIES:
      return {
        ...state,
        specialities: action.specialities,
      };

    case GET_SPECIALITY:
      return {
        ...state,
        speciality: action.speciality,
      };
    default:
      return state;
  }
};

const courseReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_COURSES:
      return {
        ...state,
        courses: action.courses,
      };

    case GET_COURSE:
      return {
        ...state,
        course: action.course,
      };
    default:
      return state;
  }
};
const teacherReducer = (state = {}, action) => {
  if (action.type === GET_ALL_COURSES) {
    return {
      ...state,
      teachers: action.teachers,
    };
  }
  return state;
};
const fragmentReducer = (state = {}, action) => {
  if (action.type === GET_FRAGMENT) {
    return {
      ...state,
      fragment: action.fragment,
    };
  }
  return state;
};

const reducers = {
  postReducer,
  especialityReducer,
  courseReducer,
  teacherReducer,
  fragmentReducer,
};

export default reducers;
