import combineContext from "@/utils/combineContext";

import {AuthContextProvider} from './AuthContext.jsx';
import { CreateWorkspaceContextProvider } from "./CreateaWorkspaceaContext.jsx";

export const AppContextProvider = combineContext(AuthContextProvider,CreateWorkspaceContextProvider);