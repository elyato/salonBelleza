import { useQuery } from '@tanstack/react-query';
import type { Employee } from '../interfaces/servicios';
import axios from 'axios';

export const useServices = () => {
      const { data: employees, isLoading: employeesLoading, error: employeesError } = useQuery<Employee[], Error>({
        queryKey: ['employees'],
        queryFn: async () => {
          const res = await axios.get('/api/Employees');
          return res.data as Employee[];
        },
      });

       const { data: servicio, isLoading: servicesLoading, error: servicesError } = useQuery({
         queryKey: ['services'],
         queryFn: async () => {
             const res = await axios.get('/api/Service');
             return res.data;
         }
         });
  
    return {employees, employeesLoading, employeesError, servicio, servicesLoading, servicesError};
}
