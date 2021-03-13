import axios from 'axios';
import {
  GET_ALL_COURSES,
  GET_ALL_POSTS,
  GET_ALL_SPECIALITIES,
  GET_ALL_TEACHERS,
  GET_COURSE,
  GET_FRAGMENT,
  GET_POST,
  GET_SPECIALITY,
} from './actions';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllPosts = () => dispatch => {
  axios.get(`${API_URL}/posts`).then(resp =>
    dispatch({
      type: GET_ALL_POSTS,
      posts: resp.data,
    })
  );
};

export const getAllSpecialities = () => dispatch => {
  axios.get(`${API_URL}/especialidades`).then(resp =>
    dispatch({
      type: GET_ALL_SPECIALITIES,
      specialities: resp.data,
    })
  );
};

export const getAllCourses = () => dispatch => {
  axios.get(`${API_URL}/cursos`).then(resp =>
    dispatch({
      type: GET_ALL_COURSES,
      courses: resp.data,
    })
  );
};

export const getAllTeachers = () => dispatch => {
  axios.get(`${API_URL}/profesores`).then(resp =>
    dispatch({
      type: GET_ALL_TEACHERS,
      teachers: resp.data,
    })
  );
};

export const getPost = id => dispatch => {
  axios.get(`${API_URL}/posts/${id}`).then(resp =>
    dispatch({
      type: GET_POST,
      post: resp.data,
    })
  );
};

export const getSpeciality = id => dispatch => {
  axios.get(`${API_URL}/especialidades/${id}`).then(resp =>
    dispatch({
      type: GET_SPECIALITY,
      speciality: resp.data,
    })
  );
};

export const getCourse = id => dispatch => {
  axios.get(`${API_URL}/cursos/${id}`).then(resp =>
    dispatch({
      type: GET_COURSE,
      course: resp.data,
    })
  );
};

export const getFragment = id => dispatch => {
  axios.get(`${API_URL}/clases/${id}`).then(resp =>
    dispatch({
      type: GET_FRAGMENT,
      fragment: resp.data,
    })
  );
};
