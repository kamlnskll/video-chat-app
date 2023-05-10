import { ADD_PEER, REMOVE_PEER } from './peerActions'

export type PeerState = Record<string, { stream: MediaStream }>
type PeerAction =
  | {
      type: typeof ADD_PEER
      payload: { peerId: string; stream: MediaStream }
    }
  | {
      type: typeof REMOVE_PEER
      payload: {
        peerId: string
      }
    }
  | {
      type: 'UPDATE_PEER_VID'
      payload: {
        peerId: string
        videoEnabled: boolean
      }
    }

export const peerReducer = (state: PeerState, action: PeerAction) => {
  switch (action.type) {
    case ADD_PEER:
      return {
        ...state,
        [action.payload.peerId]: {
          stream: action.payload.stream,
        },
      }
    //@ts-ignore
    case REMOVE_PEER:
      const { [action.payload.peerId]: deleted, ...rest } = state
      return rest

    case 'UPDATE_PEER_VID':
      return {
        ...state,
        [action.payload.peerId]: {
          ...state[action.payload.peerId],
          videoEnabled: action.payload.videoEnabled,
        },
      }

    default:
      return { ...state }
  }
}
