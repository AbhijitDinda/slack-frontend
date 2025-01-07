import combineContext from "@/utils/combineContext";

import {AuthContextProvider} from './AuthContext.jsx';

export const AppContextProvider = combineContext(AuthContextProvider);