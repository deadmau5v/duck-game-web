package logic

import (
	"context"

	"DuckGameGo/internal/svc"
	"DuckGameGo/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

type DuckGameGoLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewDuckGameGoLogic(ctx context.Context, svcCtx *svc.ServiceContext) *DuckGameGoLogic {
	return &DuckGameGoLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *DuckGameGoLogic) DuckGameGo(req *types.Request) (resp *types.Response, err error) {
	// todo: add your logic here and delete this line

	return
}
