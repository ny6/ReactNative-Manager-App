import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import lodashMap from 'lodash.map';
import { Card } from './common';
import { fetchEmployees } from '../actions/Employee';
import ListItem from './ListItem';

const styles = {
  alertClass: {
    fontSize: 20,
    alignSelf: 'center',
  },
};
class EmployeeList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  renderAlerts = () => {
    const { error, message } = this.props;
    const { alertClass } = styles;
    if (error) return <Text style={[alertClass, { color: 'red' }]}>{error}</Text>;
    if (message) return <Text style={[alertClass, { color: 'green' }]}>{message}</Text>;
    return null;
  };

  render() {
    const { employees } = this.props;
    return (
      <Card>
        {this.renderAlerts()}
        <FlatList
          data={employees}
          renderItem={x => <ListItem {...x.item} />}
          keyExtractor={({ uid }) => uid}
        />
      </Card>
    );
  }
}

EmployeeList.defaultProps = {
  error: '',
  message: '',
  employees: [],
};
EmployeeList.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
  employees: PropTypes.instanceOf(Array),
};

const mapStateToProps = ({
  alert: { error, message },
  employee: { employees: emps },
}) => {
  const employees = lodashMap(emps, (val, uid) => ({ ...val, uid }));
  return { error, message, employees };
};
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
