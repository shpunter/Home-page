import { createRootRoute, createRoute } from "@tanstack/react-router";
import Root from "/src/pages/root/root.tsx";
import { lazy, Suspense } from "react";
import DocSkeleton from "/src/UI/skeleton/docSkeleton/docSkeleton.tsx";

const Install = lazy(() => import("/src/pages/install/install.tsx"));
const Home = lazy(() => import("/src/pages/home/home.tsx"));
const Performance = lazy(() => import("/src/pages/benchmark/benchmark.tsx"));
const Add = lazy(() => import("/src/pages/add/add.tsx"));
const Sub = lazy(() => import("/src/pages/sub/sub.tsx"));
const Div = lazy(() => import("/src/pages/div/div.tsx"));
const Mul = lazy(() => import("/src/pages/mul/mul.tsx"));
const Round = lazy(() => import("/src/pages/round/round.tsx"));
const Pipe = lazy(() => import("/src/pages/pipe/pipe.tsx"));
const Sort = lazy(() => import("/src/pages/sort/sort.tsx"));
const Quartile = lazy(() => import("/src/pages/quartile/quartile.tsx"));
const Mean = lazy(() => import("/src/pages/mean/mean.tsx"));
const Max = lazy(() => import("/src/pages/max/max.tsx"));
const Min = lazy(() => import("/src/pages/min/min.tsx"));
const IsEqual = lazy(() => import("/src/pages/isEqual/isEqual.tsx"));
const IsLeftGreater = lazy(() =>
  import("/src/pages/isLeftGreater/isLeftGreater.tsx")
);
const IsLeftGreaterOrEqual = lazy(() =>
  import("/src/pages/isLeftGreaterOrEqual/isLeftGreaterOrEqual.tsx")
);
const Mad = lazy(() => import("/src/pages/MAD/MAD.tsx"));
const Iqr = lazy(() => import("/src/pages/IQR/IQR.tsx"));
const Sqrt = lazy(() => import("/src/pages/sqrt/sqrt.tsx"));
const Cbrt = lazy(() => import("/src/pages/cbrt/cbrt.tsx"));
const Abs = lazy(() => import("/src/pages/abs/abs.tsx"));
const ToBase = lazy(() => import("/src/pages/toBase/toBase.tsx"));
const IsHex = lazy(() => import("/src/pages/isHex/isHex.tsx"));
const IsBinary = lazy(() => import("/src/pages/isBinary/isBinary.tsx"));
const IsDecimal = lazy(() => import("/src/pages/isDecimal/isDecimal.tsx"));
const IsOctal = lazy(() => import("/src/pages/isOctal/isOctal.tsx"));
const IsNumber = lazy(() => import("/src/pages/isNumber/isNumber.tsx"));
const FDR = lazy(() => import("/src/pages/FDR/FDR.tsx"));

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Home />
    </Suspense>
  ),
});

const installRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/install",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Install />
    </Suspense>
  ),
});

const addRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Add />
    </Suspense>
  ),
});

const subRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sub",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Sub />
    </Suspense>
  ),
});

const divRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/div",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Div />
    </Suspense>
  ),
});

const mulRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mul",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Mul />
    </Suspense>
  ),
});

const roundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/round",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Round />
    </Suspense>
  ),
});

const pipeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pipe",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Pipe />
    </Suspense>
  ),
});

const sortRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sort",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Sort />
    </Suspense>
  ),
});

const quartileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quartile",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Quartile />
    </Suspense>
  ),
});

const meanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mean",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Mean />
    </Suspense>
  ),
});

const maxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/max",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Max />
    </Suspense>
  ),
});

const minRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/min",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Min />
    </Suspense>
  ),
});

const isEqualRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isEqual",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsEqual />
    </Suspense>
  ),
});

const isLeftGreaterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isLeftGreater",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsLeftGreater />
    </Suspense>
  ),
});

const isLeftGreaterOrEqualRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isLeftGreaterOrEqual",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsLeftGreaterOrEqual />
    </Suspense>
  ),
});

const madRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mad",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Mad />
    </Suspense>
  ),
});

const fdrRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fdr",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <FDR />
    </Suspense>
  ),
});

const iqrRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/iqr",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Iqr />
    </Suspense>
  ),
});

const sqrtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sqrt",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Sqrt />
    </Suspense>
  ),
});

const cbrtRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cbrt",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Cbrt />
    </Suspense>
  ),
});

const absRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/abs",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <Abs />
    </Suspense>
  ),
});

const toBaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/toBase",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <ToBase />
    </Suspense>
  ),
});

const isHexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isHex",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsHex />
    </Suspense>
  ),
});

const isBinaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isBinary",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsBinary />
    </Suspense>
  ),
});

const isDecimalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isDecimal",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsDecimal />
    </Suspense>
  ),
});

const isOctalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isOctal",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsOctal />
    </Suspense>
  ),
});

const isNumberRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/isNumber",
  component: () => (
    <Suspense fallback={<DocSkeleton />}>
      <IsNumber />
    </Suspense>
  ),
});

const BASE = ["binary", "octal", "decimal", "hex"] as const;
const FN = ["add"] as const;
const TYPE = ["int", "float"] as const;
const REPEAT = ["1D", "1K", "1M", "10M"] as const;
const SIZE = ["sm", "lg"] as const;

const performanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/benchmark",
  validateSearch: (search: Record<string, never>): BenchmarkSearch => {
    const isFnValid = FN.indexOf(search?.fn) > -1;
    const isSizeValid = SIZE.indexOf(search?.size) > -1;
    const isBaseValid = BASE.indexOf(search?.base) > -1;
    const isTypeValid = TYPE.indexOf(search?.type) > -1;
    const isRepeatValid = REPEAT.indexOf(search?.repeat) > -1;

    return {
      fn: isFnValid ? search.fn : "add",
      size: isSizeValid ? search.size : "sm",
      base: isBaseValid ? search.base : "decimal",
      type: isTypeValid ? search.type : "int",
      repeat: isRepeatValid ? search.repeat : "1K",
    };
  },
  component: () => {
    return (
      <Suspense fallback={<DocSkeleton />}>
        <Performance />
      </Suspense>
    );
  },
});

export const routeTree = rootRoute.addChildren([
  fdrRoute,
  indexRoute,
  installRoute,
  performanceRoute,
  addRoute,
  subRoute,
  divRoute,
  mulRoute,
  roundRoute,
  pipeRoute,
  sortRoute,
  quartileRoute,
  meanRoute,
  maxRoute,
  minRoute,
  isEqualRoute,
  isLeftGreaterRoute,
  isLeftGreaterOrEqualRoute,
  madRoute,
  iqrRoute,
  sqrtRoute,
  cbrtRoute,
  absRoute,
  toBaseRoute,
  isHexRoute,
  isBinaryRoute,
  isDecimalRoute,
  isOctalRoute,
  isNumberRoute,
]);

export type BenchmarkSearch = {
  base: typeof BASE[number];
  size: typeof SIZE[number];
  fn: typeof FN[number];
  type: typeof TYPE[number];
  repeat: typeof REPEAT[number];
};
