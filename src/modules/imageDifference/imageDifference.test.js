import path from 'path'
import imageDifference from './imageDifference'

describe('imageDifference', () => {
  it('simple', async () => {
    const result = await imageDifference({
      compareScreenshotPath: path.join(__dirname, '__fixtures__/simple/compare.png'),
      baseScreenshotPath: path.join(__dirname, '__fixtures__/simple/base.png'),
      diffResultPath: path.join(__dirname, '__fixtures__/simple/diff_tmp.png'),
    })

    expect(result).toMatchSnapshot()
  })

  it('alphaBackground', async () => {
    const result = await imageDifference({
      compareScreenshotPath: path.join(__dirname, '__fixtures__/alphaBackground/compare.png'),
      baseScreenshotPath: path.join(__dirname, '__fixtures__/alphaBackground/base.png'),
      diffResultPath: path.join(__dirname, '__fixtures__/alphaBackground/diff_tmp.png'),
    })

    expect(result).toMatchSnapshot()
  })

  it('boxShadow', async () => {
    const result = await imageDifference({
      compareScreenshotPath: path.join(__dirname, '__fixtures__/boxShadow/compare.png'),
      baseScreenshotPath: path.join(__dirname, '__fixtures__/boxShadow/base.png'),
      diffResultPath: path.join(__dirname, '__fixtures__/boxShadow/diff_tmp.png'),
    })

    expect(result).toMatchSnapshot()
  })

  it('fontAliasing', async () => {
    const result = await imageDifference({
      compareScreenshotPath: path.join(__dirname, '__fixtures__/fontAliasing/compare.png'),
      baseScreenshotPath: path.join(__dirname, '__fixtures__/fontAliasing/base.png'),
      diffResultPath: path.join(__dirname, '__fixtures__/fontAliasing/diff_tmp.png'),
    })

    expect(result).toMatchSnapshot()
  })

  it('imageCompression', async () => {
    const result = await imageDifference({
      compareScreenshotPath: path.join(__dirname, '__fixtures__/imageCompression/compare.png'),
      baseScreenshotPath: path.join(__dirname, '__fixtures__/imageCompression/base.png'),
      diffResultPath: path.join(__dirname, '__fixtures__/imageCompression/diff_tmp.png'),
    })

    expect(result).toMatchSnapshot()
  })
})