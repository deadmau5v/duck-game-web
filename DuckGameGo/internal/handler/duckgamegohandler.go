package handler

import (
	"net/http"

	"DuckGameGo/internal/logic"
	"DuckGameGo/internal/svc"
	"DuckGameGo/internal/types"
	"github.com/zeromicro/go-zero/rest/httpx"
)

func DuckGameGoHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.Request
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := logic.NewDuckGameGoLogic(r.Context(), svcCtx)
		resp, err := l.DuckGameGo(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp)
		}
	}
}
