import combineContext from "@/utils/combineContext";

import {AuthContextProvider} from './AuthContext.jsx';
import { CreateWorkspaceContextProvider } from "./CreateaWorkspaceaContext.jsx";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext.jsx";
import { CreateChannelContextProvider } from "./CreateChannelContext.jsx";

export const AppContextProvider = combineContext(AuthContextProvider,CreateWorkspaceContextProvider,WorkspacePreferencesModalContextProvider,CreateChannelContextProvider);