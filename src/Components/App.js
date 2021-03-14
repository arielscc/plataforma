import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Course } from './pages/Course';
import { Courses } from './pages/Courses';
import { Home } from './pages/Home';
import { Specialities } from './pages/Specialities';
import { Speciality } from './pages/Speciality';
import { Teachers } from './pages/Teachers';
import { Fragment } from './pages/Fragment';

import { Login } from './pages/Login';
import { Register } from './pages/Register';

import { Protected } from './routes/Protected';
import { Public } from './routes/Public';
import { Page404 } from './pages/Page404';
import { Header } from './Organisms/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Protected exact path="/" component={Home} />
        <Protected exact path="/especialidades" component={Specialities} />
        <Protected exact path="/especialidades/:id" component={Speciality} />
        <Protected exact path="/cursos" component={Courses} />
        <Protected exact path="/cursos/:id" component={Course} />
        <Protected exact path="/profesores" component={Teachers} />
        <Protected exact path="/clase/:id" component={Fragment} />

        <Public exact path="/login" component={Login} />
        <Public exact path="/registro" component={Register} />

        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default App;
