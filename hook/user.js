// Libs
import useSWR from "swr";
import api from "helper/swr";
import { useCallback, useState } from "react";

//TODO: Match with backend endpoint
const pathName = "/user"; // End point
const msgHead = "Context"; // Just For message

//? ============== GENERAL HOOK (ALL DATA) ============= ?//

export const useUsers = ({ queryString = "" }) => {
  const pathKeys = pathName + "?" + queryString;
  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const [loading, setLoading] = useState(false);

  // Add Hook Function
  const onAdd = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.post(pathName, data);
        if (res.success) {
          mutate();
          return res.success;
        } else {
          return res.success;
        }
      } catch (error) {
        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate]
  );
  // ==========================

  // Delete Hook Function
  const onDelete = useCallback(
    async (singleId) => {
      try {
        setLoading(true);
        const { data: res } = await api.delete(pathName + `/${singleId}`, data);
        if (res.success) {
          mutate();

          return res.success;
        } else {
          return res.success;
        }
      } catch (error) {
        return false;
      } finally {
        setLoading(false);
      }
    },
    [data, mutate]
  );
  // ==========================

  return {
    data,
    loading: (!error && !data) || isValidating || loading,
    onAdd,
    onDelete,
  };
};

// * ====================================== * //

//? ============== SPECIFIC HOOK (SINGLE DATA) ============= ?//

export const useUser = ({ singleId }) => {
  const pathKeys = `${pathName}/${singleId}`;
  const { data = [], error, isValidating, mutate } = useSWR(pathKeys);
  const [loading, setLoading] = useState(false);

  // Edit Hook Function
  const onEdit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const { data: res } = await api.put(pathKeys, data);
        if (res.success) {
          mutate();

          return res.success;
        } else {
          return res.success;
        }
      } catch (error) {
        return false;
      } finally {
        setLoading(false);
      }
    },
    [mutate, pathKeys]
  );
  // ==========================

  return {
    data,
    loading: (!error && !data) || isValidating || loading,
    onEdit,
  };
};

// * ====================================== * //
