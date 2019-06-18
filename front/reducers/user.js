export const initState = {
  // isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  loginError: "", // 로그인 에러
  isSignedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpError: "", // 회원가입 에러
  // user: null
  me: null,
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null, // 남의 정보
  isEditingNickname: false, // 이름 변경 중
  editNicknameError: '', // 이름 변경 실패 사유

};

// 액션 타입
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
export const LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
export const LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE";

export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

export const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
export const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
export const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";

export const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
export const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
export const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";

export const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
export const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
export const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";

export const EDIT_NICKNAME_REQUEST = "EDIT_NICKNAME_REQUEST";
export const EDIT_NICKNAME_SUCCESS = "EDIT_NICKNAME_SUCCESS";
export const EDIT_NICKNAME_FAILURE = "EDIT_NICKNAME_FAILURE";

//  동기요청의 경우 비동기 처럼 request -> success or failure 와 같이 기다리는 것 없이 바로 실행되는 것이라서
//  redux-saga가 필요 없다
//  export const INCREMENT_NUMBER = 'INCREMENT_NUMBER'

// 액션에 넣을 데이터가 동적일 경우 함수로 작성

/*
export const signUpRequestAction = data => {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
};

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS
};

export const loginRequestAction = data => {
  type: LOG_IN_REQUEST, data;
};

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST
};
*/

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      // console.log(action.data)
      return {
        ...state,
        // isLoggedIn: true,
        // user: action.data
        // user: dummyUser
        isLoggingIn: true,
        loginError: ""
      };

    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        // isLoggedIn: true,
        me: action.data
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        // isLoggedIn: false,
        loginError: action.error,
        me: null
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true
      };
    }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        // isLoggedIn: false,
        me: null
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpError: ""
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        signUpError: action.error
      };
    //
    /*
    case LOAD_USER_REQUEST:
      return {
        ...state
      };
    case LOAD_USER_SUCCESS:
      if (action.me) {
        return {
          ...state,
          me: action.data
        };
      }
      return {
        ...state,
        userInfo: action.data
      };
    case LOAD_USER_FAILURE:
      return {
        ...state
      };
      */
    //
    case LOAD_USER_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_USER_SUCCESS: {
      if (action.me) {
        return {
          ...state,
          me: action.data
        };
      }
      return {
        ...state,
        userInfo: action.data
      };
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state
      };
    }

    case FOLLOW_USER_REQUEST: {
      return {
        ...state
      };
    }
    case FOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: [{ id: action.data }, ...state.me.Followings]
        }
      };
    }
    case FOLLOW_USER_FAILURE: {
      return {
        ...state
      };
    }
    case UNFOLLOW_USER_REQUEST: {
      return {
        ...state
      };
    }
    case UNFOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: state.me.Followings.filter(v => v.id !== action.data)
        },
        followingList: state.followingList.filter(v => v.id !== action.data)
      };
    }
    case UNFOLLOW_USER_FAILURE: {
      return {
        ...state
      };
    }
    case ADD_POST_TO_ME: {
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts]
        }
      };
    }
    case LOAD_FOLLOWERS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        followerList: action.data
      };
    }
    case LOAD_FOLLOWERS_FAILURE: {
      return {
        ...state
      };
    }
    case LOAD_FOLLOWINGS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        followingList: action.data
      };
    }
    case LOAD_FOLLOWINGS_FAILURE: {
      return {
        ...state
      };
    }

    case REMOVE_FOLLOWER_REQUEST: {
      return {
        ...state
      };
    }
    case REMOVE_FOLLOWER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followers: state.me.Followers.filter(v => v.id !== action.data)
        },
        followerList: state.followerList.filter(v => v.id !== action.data)
      };
    }
    case REMOVE_FOLLOWER_FAILURE: {
      return {
        ...state
      };
    }
    case EDIT_NICKNAME_REQUEST: {
      return {
        ...state,
        isEditingNickname: true,
        editNicknameErrorReason: ""
      };
    }
    case EDIT_NICKNAME_SUCCESS: {
      return {
        ...state,
        isEditingNickname: false,
        me: {
          ...state.me,
          nickname: action.data
        }
      };
    }
    case EDIT_NICKNAME_FAILURE: {
      return {
        ...state,
        isEditingNickname: false,
        editNicknameErrorReason: action.error
      };
    }

    default:
      return state;
  }
};

export default reducer;
